'use client'

import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { FiLock, FiMail } from 'react-icons/fi'
import { LuCrown, LuStar } from 'react-icons/lu'
import { MdOutlineMovieFilter } from 'react-icons/md'

const LoginView = () => {
	return (
		<div className='flex min-h-screen '>
			<div className="bg-[url('../assets/sign-in-bg.webp')] w-1/3 flex justify-center items-center">
				<div className='text-white space-y-8 p-4 text-lg'>
					<div className='relative'>
						<MdOutlineMovieFilter className='absolute top-[-.5rem] left-[-.65rem] size-10 text-emerald' />
						<p className='pl-12'>Disfruta de los mejores estrenos</p>
					</div>
					<div className='relative'>
						<FaRegHeart className='absolute top-[-.4rem] left-[-.65rem] size-9 text-emerald' />
						<p className='pl-12'>
							Organiza tus peliculas{' '}
							<span className='font-bold'>favoritas, pendientes y vistas</span>
						</p>
					</div>
					<div className='relative'>
						<LuStar className='absolute top-[-.5rem] left-[-.65rem] size-10 text-emerald' />
						<p className='pl-12'>
							Puntua y deja tu opinion sobre las peliculas
						</p>
					</div>
					<div className='relative'>
						<LuCrown className='absolute top-[-.5rem] left-[-.65rem] size-10 text-emerald' />
						<p className='pl-12'>
							Obten <span className='font-bold'>premium</span> para funciones
							exclusivas!
						</p>
					</div>
				</div>
			</div>
			<div className='w-[66.6%] flex flex-col justify-center '>
				<div className='min-h-screen bg-gradient-to-br from-eblack-17 to-eblack-20 py-12 px-4 flex items-center justify-center'>
					<div className='max-w-md w-full space-y-8 bg-eblack-20  p-8 rounded-xl shadow-lg'>
						<div className='text-center'>
							<h2 className='text-3xl font-extrabold text-white mb-2'>
								Bienvenido de vuelta
							</h2>
							<p className='text-sm text-timberwolf'>Nos alegra tenerte aqui</p>
						</div>

						<form className='mt-8 space-y-6'>
							<div className='space-y-4'>
								<div>
									<div className='relative'>
										<FiMail className='absolute top-3 left-3 text-white' />
										<input
											type='email'
											className='w-full pl-9 pr-3 py-2 border border-timberwolf rounded-lg focus:outline-none focus:border-jade focus:shadow-sm transition-all duration-200 ease-in-out placeholder-timberwolf text-sm text-white'
											placeholder='email@ejemplo.com'
										/>
									</div>
								</div>

								<div>
									<div className='relative'>
										<FiLock className='absolute top-3 left-3 text-white' />
										<input
											type='password'
											className='w-full pl-9 pr-10 py-2 border border-timberwolf rounded-lg focus:outline-none focus:border-jade focus:shadow-sm transition-all duration-200 ease-in-out placeholder-timberwolf text-sm text-white'
											placeholder='Crea una contraseña fuerte'
										/>
									</div>
								</div>

								<div className='flex items-center'>
									<p className='ml-2 block text-sm text-timberwolf'>
										Aun no tienes una cuenta?{' '}
										<Link
											href={'/auth/register'}
											className='text-emerald hover:text-jade'
										>
											Crear cuenta
										</Link>
									</p>
								</div>
							</div>

							<div className='space-y-4'>
								<button
									type='submit'
									className='w-full flex justify-center py-2 px-4  placehoder:text-smtext-sm font-semibold rounded-lg text-white bg-jade hover:cursor-pointer hover:bg-emerald transition duration-300 ease-in-out'
								>
									Iniciar sesion
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginView
