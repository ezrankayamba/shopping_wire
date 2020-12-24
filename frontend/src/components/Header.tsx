import React from "react"
import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonSearchbar, IonToolbar } from "@ionic/react"
import { chatboxEllipsesOutline, heartOutline, qrCodeOutline } from "ionicons/icons";

export const Header: React.FC = () => {
    const noPadding = {
        padding: 0
    };
    return <IonHeader className="ion-no-border">
        <IonToolbar>
            <IonGrid>
                <IonRow className="ion-align-items-center">
                    <IonCol size="auto" className="ion-no-padding">
                        <IonButtons>
                            <IonButton>
                                <IonIcon icon={qrCodeOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonCol>
                    <IonCol className="ion-no-padding">
                        <IonSearchbar style={noPadding} />
                    </IonCol>
                    <IonCol size="auto" className="ion-no-padding">
                        <IonButtons>
                            <IonButton>
                                <IonIcon icon={chatboxEllipsesOutline} />
                            </IonButton>
                            <IonButton>
                                <IonIcon icon={heartOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    </IonHeader>
}


export default Header;