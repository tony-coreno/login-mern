
const Formulario = ({ setName, setPassword, enviarDatos }) => {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                WebApp
            </nav>
            <form onSubmit={enviarDatos}>
                <div className='container-sm letra'>
                    <div className='contenedor'>
                        <hr />
                        <h1 className='texto letra2'>Users</h1>
                        <hr />
                        <div className=''>
                            <label className="mt-4">Usuario:</label>
                            <input
                                className="form-control mt-2 bordes"
                                autoFocus placeholder='Ej. Developer'
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className=''>
                            <label className="mt-4">Contraseña: </label>
                            <input
                                className="form-control mt-2 bordes"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="******"
                            />
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-outline-light mt-4 mr-4' type="submit" >Enviar</button>
                        {/* <button className='btn btn-outline-primary mt-4' onClick={() => limpiarFormulario} >Limpiar</button> */}
                    </div>
                </div>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#052C" fillOpacity="1" d="M0,96L10,85.3C20,75,40,53,60,74.7C80,96,100,160,120,186.7C140,213,160,203,180,181.3C200,160,220,128,240,106.7C260,85,280,75,300,90.7C320,107,340,149,360,138.7C380,128,400,64,420,80C440,96,460,192,480,202.7C500,213,520,139,540,133.3C560,128,580,192,600,218.7C620,245,640,235,660,240C680,245,700,267,720,261.3C740,256,760,224,780,208C800,192,820,192,840,192C860,192,880,192,900,176C920,160,940,128,960,101.3C980,75,1000,53,1020,69.3C1040,85,1060,139,1080,138.7C1100,139,1120,85,1140,74.7C1160,64,1180,96,1200,112C1220,128,1240,128,1260,144C1280,160,1300,192,1320,186.7C1340,181,1360,139,1380,112C1400,85,1420,75,1430,69.3L1440,64L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path></svg>

        </>
    );
}

export default Formulario;