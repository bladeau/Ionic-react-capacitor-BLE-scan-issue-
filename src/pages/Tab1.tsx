import React, {useState} from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { BLE } from '@ionic-native/ble';

const Tab1: React.FC = () => {
  let devices: string[] = []
  const [response, setResponse] = useState('')
  let scan = ()=>{
    BLE.scan([],4).subscribe((device) =>{
      console.log(device);
      if(device && device.name){
        devices = [...devices, device.name];
        setResponse(devices.reduce((a,b)=> a + ', ' + b ));
      }
      
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={()=> scan()}>Scan</IonButton>
        <p>{response}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
