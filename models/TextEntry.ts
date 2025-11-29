export interface TextEntry{
  id:number;
  text:string;
  createdAt:string; // ISO string
}

export const emptyTextEntry = {
  id:0,
  text:'',
  createdAt:''
}

export default TextEntry;