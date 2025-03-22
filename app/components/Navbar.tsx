const Navbar = () => {

  return (
    <>
        <div className='flex items-center justify-between p- bg-yellow-400'>
          <div className='flex items-center gap-3'>
            <img
              className='w-50 sm:w-69 md:w-90 mx-3 my-5'
              src='writeme.png'
              alt='WriteMe.md logo'
            />
          </div>
        </div>
    </>
  );
};

export default Navbar;
