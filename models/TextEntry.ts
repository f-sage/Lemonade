export interface TextEntry{
  id:number;
  text:string;
  datetime:string; // ISO string
}

export const emptyTextEntry = {
  id:0,
  text:'',
  datetime:''
}

export default TextEntry;