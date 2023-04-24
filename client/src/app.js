import Layout from './components/layout';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useState } from 'react';
import { AuthProvider } from './tools/auth-provider';
import { Notifications } from '@mantine/notifications';

const App = () => {
    const [colorScheme, setColorScheme] = useState('dark');
    const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <>
            <AuthProvider>
                <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
                        <Notifications />
                        <Layout />
                    </MantineProvider>
                </ColorSchemeProvider>
            </AuthProvider>
        </>
    );
};

export default App;