import React, { Component,createRef } from 'react'
import logo from './main_logo.png'


export default class DaysRemains extends Component {
    constructor() {
        super()
        this.state = {
            dayTime: 0,
            hTime: 0,
            mTime: 0,
            sTime: 0
        }
        this.catchMain = createRef();
        this.catchSection = createRef();
        this.catchButton = createRef()

    }
    componentDidMount() {this.setDays()}
    darkMode =() =>{
        let main = this.catchMain.current
        let section =this.catchSection.current
        let buttom =this.catchButton.current
        main.classList.toggle('dark-mode')
        section.classList.toggle('default-mode')
       if(main.className === 'dark-mode'){
           buttom.textContent = 'Light'
    }
    else{
        buttom.textContent = 'Dark'
   
    }
        

       console.log(buttom.textContent)
        console.log(main);
        
    }

    setDays = () => {
        const trybeGraduation = new Date('Aug 9, 2022 00:00:00').getTime()
        const interval = setInterval(() => {
            const todayDate = new Date().getTime()
            const daysRemains = trybeGraduation - todayDate

            const min = 1000 * 60 * 60
            const sec = 1000 * 60

            const dayTime = Math.floor(daysRemains / (1000 * 60 * 60 * 24))
            const hTime = Math.floor(daysRemains % (1000 * 60 * 60 * 24) / min)
            const mTime = Math.floor(daysRemains % min / sec)
            const sTime = Math.floor(daysRemains % sec / 1000)
            daysRemains < 0 ? clearInterval(interval) : this.setState({
                dayTime,
                hTime,
                mTime,
                sTime
            })
        }, 1000)

    }
    render() {
        const { dayTime, hTime, mTime, sTime } = this.state
        return (
            <main ref={this.catchMain}>
               <header> 
                   <h1> Dias para formatura da turma 16</h1>
                <button ref={this.catchButton} onClick={this.darkMode}>Dark</button>
                   
               </header>
                <section ref={this.catchSection} className='default-mode'>
                    <div className='days'>
                        {dayTime}
                        <p>
                            Dias
                        </p>
                    </div>
                    <span>:</span>
                    <div>
                        {hTime}


                        <p>
                            Horas
                        </p>
                    </div>
                    <span>:</span>
                    <div>
                        {mTime}

                        <p>
                            Minutos
                        </p>
                    </div>
                    <span>:</span>
                    <div>
                        {sTime}


                        <p>
                            Segundos
                        </p>
                    </div>





                </section>
                <img src={logo} alt="trybe image" className='logo-image' />
            </main >
        )
    }
}