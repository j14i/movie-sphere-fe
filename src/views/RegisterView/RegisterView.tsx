'use client'

import { FaRegHeart } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { LuCrown, LuStar } from 'react-icons/lu'
import { MdOutlineMovieFilter } from 'react-icons/md'

const RegisterView = () => {
	return (
		<div className='flex min-h-screen '>
			<div className="bg-[url('../assets/sign-in-bg.webp')] w-1/3 flex justify-center items-center">
				<div className='text-white space-y-8 p-4 text-lg'>
					<div className='relative'>
						<MdOutlineMovieFilter  className='absolute top-[-.5rem] left-[-.65rem] size-10 text-emerald' />
						<p className='pl-12'>Disfruta de los mejores estrenos</p>
					</div>
					<div className='relative'>
					<FaRegHeart className='absolute top-[-.4rem] left-[-.65rem] size-9 text-emerald'/>
						<p className='pl-12'>
							Organiza tus peliculas{' '}
							<span className='font-bold'>favoritas, pendientes y vistas</span>
						</p>
					</div>
					<div className='relative'>
					<LuStar className='absolute top-[-.5rem] left-[-.65rem] size-10 text-emerald'/>
						<p className='pl-12'>Puntua y deja tu opinion sobre las peliculas</p>
					</div>
					<div className='relative'>
					<LuCrown className='absolute top-[-.5rem] left-[-.65rem] size-10 text-emerald'/>
						<p className='pl-12'>
							Obten <span className='font-bold'>premium</span> para funciones
							exclusivas!
						</p>
					</div>
				</div>
			</div>
			<div className='w-[66.6%] flex flex-col'>
				<div className='min-h-screen bg-gradient-to-br from-eblack-17 to-eblack-20 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
					<div className='max-w-md w-full space-y-8 bg-eblack-20  p-8 rounded-xl shadow-lg'>
						<div className='text-center'>
							<h2 className='text-3xl font-extrabold text-white mb-2'>
								Crear Cuenta
							</h2>
							<p className='text-sm text-timberwolf'>
								Unete y explora experiencias inolvidables
							</p>
						</div>

						<form className='mt-8 space-y-6'>
							<div className='space-y-4'>
								<div>
									<div className='relative'>
										<FiUser className='absolute top-3 left-3 text-white' />
										<input
											type='text'
											className='w-full pl-9 py-2 border border-timberwolf rounded-lg focus:outline-none focus:border-jade focus:shadow-sm transition-all duration-200 ease-in-out placeholder-timberwolf text-sm text-white'
											placeholder='Nombre'
										/>
									</div>
								</div>

								<div>
									<div className='relative'>
										<FiMail className='absolute top-3 left-3 text-white' />
										<input
											type='email'
											className='w-full pl-9  py-2 border border-timberwolf rounded-lg focus:outline-none focus:border-jade focus:shadow-sm transition-all duration-200 ease-in-out placeholder-timberwolf text-sm text-white'
											placeholder='email@ejemplo.com'
										/>
									</div>
								</div>

								<div>
									<div className='relative'>
										<FiLock className='absolute top-3 left-3 text-white' />
										<input
											type='password'
											className='w-full pl-9  py-2 border border-timberwolf rounded-lg focus:outline-none focus:border-jade focus:shadow-sm transition-all duration-200 ease-in-out placeholder-timberwolf text-sm text-white'
											placeholder='Crea una contraseña fuerte'
										/>
									</div>
								</div>

								<div>
									<div className='relative'>
										<FiLock className='absolute top-3 left-3 text-white' />
										<input
											type='password'
											className='w-full pl-9 py-2 border border-timberwolf rounded-lg focus:outline-none focus:border-jade focus:shadow-sm transition-all duration-200 ease-in-out placeholder-timberwolf text-sm text-white'
											placeholder='Repite tu contraseña'
										/>
									</div>
								</div>

								<div className='flex items-center pl-2'>
									<input type='checkbox' className='w-4 h-4 focus:ring-jade' />
									<label className='ml-2 block text-sm text-timberwolf'>
										Estoy de acuerdo con los{' '}
										<a href='#' className='text-emerald hover:text-jade'>
											terminos y condiciones
										</a>
									</label>
								</div>
							</div>

							<div className='space-y-4'>
								<button
									type='submit'
									className='w-full flex justify-center py-2 px-4  placehoder:text-smtext-sm font-semibold rounded-lg text-white bg-jade hover:cursor-pointer hover:bg-emerald transition duration-300 ease-in-out'
								>
									Crear Cuenta
								</button>

								<button
									type='button'
									className='w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-eblack-20 bg-white transition duration-200 ease-in-out hover:cursor-pointer hover:shadow-lg hover:shadow-white/50 '
								>
									<FcGoogle className='mr-2 w-4 h-4' />
									Registrarse con Google
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterView
