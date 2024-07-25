
export const listToString = (arr:any, key:string)=>{
  const list:string[] = arr.map((e:any)=>e[key])
  return list.toString()
}

export const convertSecToMin = (seconds:number)=>{
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}