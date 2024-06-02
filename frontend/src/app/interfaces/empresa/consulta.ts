export interface Consulta{
    status: boolean;
    value: {
      cedula: string;
      persona: string;
      f_nacimiento: string;
      nacionalidad: string;
      direccion: string;
      f_defuncion: string | null;
      completo: any; // You can specify the type for 'completo' more precisely if needed
    };
  }
  


