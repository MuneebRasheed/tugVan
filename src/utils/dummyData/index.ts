import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../strings';
export const TaskCardData = [
  {
    icon: iconMapping.tugVanCompleted,
    name: "In Bidding",
    count: 20,
  },
  {
    icon: iconMapping.tugVanRequest,
    name: strings.serviceRequest,
    count: strings.number150,
  },
  {
    icon: iconMapping.tugVanInprogress,
    name: strings.inProgressService,
    count: strings.number10,
  },
  {
    icon: iconMapping.tugVanCompleted,
    name: strings.taskCompleted,
    count: strings.number25,
  },
];

export const ImageAndName = (type) => {
  let data= {image : null,name:"Tyre Fitter"};
  switch (type) {
    case "TYRE":
     
      data.image = iconMapping?.tugVanTyre;
      data.name="Tyre Fitter"
      break;
  
      case "FUEL":
        
        data.image  = iconMapping?.tugVanFuel;
        data.name="Fuel"
        break;
        case "BATTERY":
         
          data.image  = iconMapping?.tugVanBattery;
          data.name="Battery"
          break;
        
        case "RECOVERY":
          // Assuming iconMapping is defined somewhere
          data.image  = iconMapping?.tugVanBattery;
          data.name="Recovery"
          break;
    default:
      // Handle default case here, for example:
      data.image  = iconMapping?.tugVanTyre; // Or set a default image
      break;
  }
  return data;
}

export const InprogressData = [
  {
    location: "Highway, London",
    star: "255/55 R16 ,Locking Nut",
    distance: "30km",
    name: strings.tyreFitter,
 
    icon:iconMapping?.tugVanTyre

  },
  {
    location: "Highway, London",
    star: "255/55 R16 ,Locking Nut",
    distance: "30km",
    name: strings.tyreFitter,
 
    icon:iconMapping?.tugVanTyre

  },{
    location: "Highway, London",
    star: "255/55 R16 ,Locking Nut",
    distance: "30km",
    name: strings.wrongFuel,
 
    icon:iconMapping?.tugVanFuel

  },{
    location: "Highway, London",
    star: "255/55 R16 ,Locking Nut",
    distance: "30km",
    name: strings.wrongFuel,
 
    icon:iconMapping?.tugVanFuel

  },{
    location: "Highway, London",
    star: "255/55 R16 ,Locking Nut",
    distance: "30km",
    name: strings.batteryReplacment,
 
    icon:iconMapping?.tugVanBattery

  },
];
export const PendingData = [
  {
    location: "Highway, London",
    star: "255/55 R16 ",
    distance: "30km",
    name: strings.tyreFitter,
 
    icon:iconMapping?.tugVanTyre

  },
  {
    location: "Highway, London",
    star: "255/55 R16 ",
    distance: "30km",
    name: strings.tyreFitter,
 
    icon:iconMapping?.tugVanTyre

  },{
    location: "Highway, London",
    star: "255/55 R16 ",
    distance: "30km",
    name: strings.wrongFuel,
 
    icon:iconMapping?.tugVanFuel

  },{
    location: "Highway, London",
    star: "255/55 R16 ",
    distance: "30km",
    name: strings.wrongFuel,
 
    icon:iconMapping?.tugVanFuel

  },{
    location: "Highway, London",
    star: "255/55 R16 ",
    distance: "30km",
    name: strings.batteryReplacment,
 
    icon:iconMapping?.tugVanBattery

  },
];

export const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

export const messageData = [
  
      {text: 'Hello, how are you?', time: '10:00 AM', sender: true},
      {text: "I'm doing well, thanks!", time: '10:05 AM', sender: false},
      {text: "I'm doing well, thanks!", time: '10:05 AM', sender: false},
      {text: 'Hello, how are you?', time: '10:00 AM', sender: true},
 
];