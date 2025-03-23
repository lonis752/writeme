import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Ensure this is securely stored
);

export async function POST() {
  const { userId } = await auth();

  if (!userId)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

  // ✅ 1. Check if the user is an admin
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('is_admin')
    .eq('user_id', userId)
    .single();

  if (userError) {
    return NextResponse.json(
      { message: 'Failed to fetch user', error: userError },
      { status: 500 }
    );
  }

  const isAdmin = user?.is_admin;

  // ✅ 2. If NOT an admin, check daily usage
  if (!isAdmin) {
    const { data, error } = await supabase
      .from('markdown_usage')
      .select('last_generated')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      return NextResponse.json(
        { message: 'Database error', error },
        { status: 500 }
      );
    }

    const lastGenerated = data?.last_generated
      ? new Date(data.last_generated)
      : null;
    const today = new Date();
    const isSameDay =
      lastGenerated &&
      lastGenerated.getUTCFullYear() === today.getUTCFullYear() &&
      lastGenerated.getUTCMonth() === today.getUTCMonth() &&
      lastGenerated.getUTCDate() === today.getUTCDate();

    if (isSameDay) {
      return NextResponse.json(
        { message: 'You can only generate markdown once per day' },
        { status: 429 }
      );
    }
  }

  // ✅ 3. Generate Markdown (Replace with actual logic)
  const markdownContent = `# Your generated markdown...`;

  // ✅ 4. If NOT an admin, update last generation time
  if (!isAdmin) {
    const { error: upsertError } = await supabase
      .from('markdown_usage')
      .upsert([{ user_id: userId, last_generated: new Date().toISOString() }], {
        onConflict: 'user_id',
      });

    if (upsertError) {
      return NextResponse.json(
        { message: 'Error updating database', error: upsertError },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ markdown: markdownContent });
}
