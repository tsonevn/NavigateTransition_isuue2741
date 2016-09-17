import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import {topmost} from "ui/frame"

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
  page.bindingContext = new HelloWorldModel();
}


export function onTap(args:EventData){
  topmost().navigate({
    moduleName:"./page2",
    transition: {
                    name: "slide",
                    duration: 380,
                    curve: "easeIn"
                }
  })
}