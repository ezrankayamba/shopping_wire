import React from 'react';
import * as Icons from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

function toCamelCase(text) {
    return text.replace(/-\w/g, clearAndUpper);
}

function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
}
const MyIcon = ({ name }) => {
    let sanitized = toCamelCase(name || '')
    return (
        <IonIcon icon={Icons[sanitized]} />
    );
}

export default MyIcon;