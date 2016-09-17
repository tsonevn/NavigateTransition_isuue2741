import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import {topmost} from "ui/frame"


export function goBack(){
    topmost().goBack();
}