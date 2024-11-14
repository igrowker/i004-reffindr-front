export default function Modal() {
  return (
    <>
      <div className='font-sans'>
        <div className='relative flex min-h-screen flex-col items-center bg-gray-100 sm:justify-center'>
          <div className='relative w-full sm:max-w-sm'>
            <div className='card absolute h-full w-full -rotate-6 transform rounded-3xl bg-[#146EB4] shadow-lg'></div>
            <div className='card absolute h-full w-full rotate-6 transform rounded-3xl bg-[#000000] shadow-lg'></div>
            <div className='relative w-full rounded-3xl bg-gray-100 px-6 py-4 shadow-md'>
              <label className='mt-3 block text-center text-sm font-semibold text-gray-700'>
                Login
              </label>
              <form className='mt-10'>
                <div>
                  <input
                    type='email'
                    placeholder='Correo electronico'
                    className='mt-1 block h-11 w-full rounded-xl border-none bg-gray-100 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0'
                  />
                </div>

                <div className='mt-7'>
                  <input
                    type='password'
                    placeholder='Contraseña'
                    className='mt-1 block h-11 w-full rounded-xl border-none bg-gray-100 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0'
                  />
                </div>

                <div className='mt-7 flex'>
                  <label
                    htmlFor='remember_me'
                    className='inline-flex w-full cursor-pointer items-center'
                  >
                    <input
                      id='remember_me'
                      type='checkbox'
                      className='rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                      name='remember'
                    />
                    <span className='ml-2 text-sm text-gray-600'>
                      Recuerdame
                    </span>
                  </label>

                  <div className='w-full text-right'>
                    <a
                      className='text-sm text-gray-600 underline hover:text-gray-900'
                      href='#'
                    >
                      ¿Olvidó su contraseña?
                    </a>
                  </div>
                </div>

                <div className='mt-7'>
                  <button className='hover:-translate-x w-full transform rounded-xl bg-blue-500 py-3 text-white shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:shadow-inner focus:outline-none'>
                    Login
                  </button>
                </div>

                <div className='mt-7 flex items-center text-center'>
                  <hr className='border-1 w-full rounded-md border-gray-300' />
                  <label className='block w-full text-sm font-medium text-gray-600'>
                    Accede con
                  </label>
                  <hr className='border-1 w-full rounded-md border-gray-300' />
                </div>

                <div className='mt-7 flex w-full justify-center'>
                  <button className='hover:-translate-x mr-5 transform cursor-pointer rounded-xl border-none bg-blue-500 px-4 py-2 text-white shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:shadow-inner'>
                    Facebook
                  </button>

                  <button className='hover:-translate-x transform cursor-pointer rounded-xl border-none bg-red-500 px-4 py-2 text-white shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:shadow-inner'>
                    Google
                  </button>
                </div>

                <div className='mt-7'>
                  <div className='flex items-center justify-center'>
                    <label className='mr-2'>¿Eres nuevo?</label>
                    <a
                      href='#'
                      className='hover:-translate-x transform text-blue-500 transition duration-500 ease-in-out hover:scale-105'
                    >
                      Crea una cuenta
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
