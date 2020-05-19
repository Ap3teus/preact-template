import { h } from 'preact';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import AppRouter from './Router';

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
);

const Container = styled.div`
  color: ${(props) => props.theme.colors.red[0]};
`;
