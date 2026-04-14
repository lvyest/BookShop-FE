import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    color: {
      primary: string;
      background: string;
      secondary: string;
      third: string;
      border: string;
      text: string;
    };
    heading: {
        [key in HeadingSize]: {
            fontSize: string;
        }
    }
    button: {
        [key in ButtonSize] : {
            fontSize: string;
            padding: string;
        }
    }
    buttonScheme: {
        [key in ButtonScheme]: {
            color: string;
            backgroundColor: string;
        }
    }
    borderRadius: {
        default: string;
    }
  }
}
