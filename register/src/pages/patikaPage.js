import React from 'react'
import PatikaPng from '../components/PatikaPng'
import BottomShape from '../constant/svg/BottomShape'
import TopShape from '../constant/svg/TopShape'
import '../styles/patikaPage.css'

function PatikaPage(props) {

  return (
    <div className='patikaContainer'>
      <div className={props.darkMode ? 'darkPatika' : 'patika'}>
      <PatikaPng />
      <div  className={props.darkMode ? 'darkPatikaTitle' : 'patikaTitle'}>YAZILIM PATİKALARI</div>
      <div className={props.darkMode ? 'darkMainText' : 'mainText'}>
        Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir.
        Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar.
        Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar.
        Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar.
        Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler
      </div>
      <div className='shapes'>
        <div className='topShape'><TopShape color={props.darkMode ? "#FFBF5E" : ""} height={100}  width={236} /></div>
        <div className='bottomShape'><BottomShape color={props.darkMode ? "#FFBF5E" : ""}  height={100} width={355} /></div>
      </div>
    </div>
    </div>
  )
}

export default PatikaPage