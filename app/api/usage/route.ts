import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { createClerkClient } from '@clerk/clerk-sdk-node';

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const userData = await clerk.users.getUser(userId);
    let lastUsed = userData.privateMetadata.lastUsed as string | null;
    const role = userData.privateMetadata.role as string | null;

    if (!lastUsed) {
      await clerk.users.updateUser(userId, {
        privateMetadata: { lastUsed: '0' },
      });
      lastUsed = '0';
    }

    const now = Date.now();
    const lastUsedTimestamp = parseInt(lastUsed, 10);
    const oneDay = 24 * 60 * 60 * 1000;
    const canUse = now - lastUsedTimestamp >= oneDay;

    if (role === 'admin') {
        return NextResponse.json({ remaining: 1 })
    }

    return NextResponse.json({ remaining: canUse ? 1 : 0 });
  } catch (error) {
    console.error('Error fetching usage data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const userData = await clerk.users.getUser(userId);
    let lastUsed = userData.privateMetadata.lastUsed as string | null;
    const role = userData.privateMetadata.role as string | null;

    if (role === 'admin') {
        return NextResponse.json({ success: true });
    }

    if (!lastUsed) {
      await clerk.users.updateUser(userId, {
        privateMetadata: { lastUsed: '0' },
      });
      lastUsed = '0';
    }

    const now = Date.now();
    const lastUsedTimestamp = parseInt(lastUsed, 10);
    const oneDay = 24 * 60 * 60 * 1000;
    const canUse = now - lastUsedTimestamp >= oneDay;

    if (!canUse) {
      return NextResponse.json(
        { error: 'Daily limit reached' },
        { status: 403 }
      );
    }

    await clerk.users.updateUser(userId, {
      privateMetadata: { lastUsed: now.toString() },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating usage data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
