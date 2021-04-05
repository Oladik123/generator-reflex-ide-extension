export const ThursdayDemoServicePath = '/services/thursday-demo-service';

export const IThursdayDemoService = Symbol('ThursdayDemoService');

export interface IThursdayDemoService {
  getEnvVariables(): Promise < Readonly < {
      [key: string]: string | undefined
    } >>

    getText(): Promise < Readonly < {
      message: string,
      code: string
    } >>
}