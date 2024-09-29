import React from 'react'
import pfp from './assets/imgTemplate.png'

function RobloxPage() {
    return (
        <>
            <div className='grid grid-rows-12 bg-blue-400 text-black w-[18rem] h-[35rem] rounded p-1'>
                <header className='grid grid-rows-2 border row-span-2'>
                    <section className='grid grid-cols-6'>
                        <h1>Inicio</h1>
                        <span className='col-span-2'></span>
                        <button>Search</button>
                        <button>robux</button>
                        <button>Notis</button>
                    </section>
                    <section className='flex gap-1'>
                        <img src={pfp} alt='profilelogo' />
                        <h3>nickname</h3>
                    </section>
                </header>
                <main className='border row-span-9'>
                    <section className='grid grid-rows-8 max-h-[8rem] border'>
                        <h3 className='row-span-1'>Amigos (30) →</h3>
                        <div className='row-span-7'>
                            <div className=''>
                                <img src={pfp} alt='friendimg' />
                                <h4>friendName</h4>
                            </div>
                        </div>
                    </section>
                </main>
                <nav className='border'>navbar</nav>
            </div>
        </>
    )
}

export default RobloxPage
