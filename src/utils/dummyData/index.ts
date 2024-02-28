import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../strings';
export const TaskCardData = [
  {
    icon: iconMapping.tugVanCompleted,
    name: strings.taskCompleted,
    count: strings.number25,
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
];

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
