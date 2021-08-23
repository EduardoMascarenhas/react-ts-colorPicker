import React, { useState, useContext } from 'react';
import { MdBrush } from 'react-icons/md';
import { Switcher, SwitcherBody, SwitcherButton, SwitcherPanel, SwitcherSelect } from './styles';
import { ThemeContext } from 'styled-components';

interface Props {
    setTemaNovo: any;
}

const ColorSwitcher: React.FC<Props> = ({ setTemaNovo }) => {
    const { title } = useContext(ThemeContext);
    const [showPanel, setShowPanel] = useState(false);
    const setNovoTema = (t: any) => {
        setTemaNovo(t);
    }

    const openClosePanel = () => {
        if (showPanel === false) {
            setShowPanel(true)
        } else {
            setShowPanel(false)
        }
    }
    return (
        <>
            <div>
                <SwitcherPanel className={showPanel === true ? 'show' : ' '}>
                    <Switcher>
                        <SwitcherButton onClick={openClosePanel}><MdBrush className="color-switcher-icon" /></SwitcherButton>
                    </Switcher>
                    <SwitcherBody>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h3>Escuro</h3>
                                <SwitcherSelect className={title === 'dark-blue' ? 'dark-blue active' : 'dark-blue'} onClick={() => setNovoTema('dark-blue')} />
                                <SwitcherSelect className={title === 'dark-blue-2' ? 'dark-blue-2 active' : 'dark-blue-2'} onClick={() => setNovoTema('dark-blue-2')} />
                                <SwitcherSelect className={title === 'dark-blue-3' ? 'dark-blue-3 active' : 'dark-blue-3'} onClick={() => setNovoTema('dark-blue-3')} />
                                <SwitcherSelect className={title === 'dark-green' ? 'dark-green active' : 'dark-green'} onClick={() => setNovoTema('dark-green')} />
                                <SwitcherSelect className={title === 'dark-green-2' ? 'dark-green-2 active' : 'dark-green-2'} onClick={() => setNovoTema('dark-green-2')} />
                                <SwitcherSelect className={title === 'dark-grey' ? 'dark-grey active' : 'dark-grey'} onClick={() => setNovoTema('dark-grey')} />
                                <SwitcherSelect className={title === 'dark-orange' ? 'dark-orange active' : 'dark-orange'} onClick={() => setNovoTema('dark-orange')} />
                                <SwitcherSelect className={title === 'dark-purple' ? 'dark-purple active' : 'dark-purple'} onClick={() => setNovoTema('dark-purple')} />
                                <SwitcherSelect className={title === 'dark-purple-2' ? 'dark-purple-2 active' : 'dark-purple-2'} onClick={() => setNovoTema('dark-purple-2')} />
                                <SwitcherSelect className={title === 'dark-red' ? 'dark-red active' : 'dark-red'} onClick={() => setNovoTema('dark-red')} />
                                <SwitcherSelect className={title === 'dark-red-2' ? 'dark-red-2 active' : 'dark-red-2'} onClick={() => setNovoTema('dark-red-2')} />
                                <SwitcherSelect className={title === 'dark-yellow' ? 'dark-yellow active' : 'dark-yellow'} onClick={() => setNovoTema('dark-yellow')} />
                            </div>
                            <div className="col-12 text-center">
                                <h3>Claro</h3>
                                <SwitcherSelect className={title === 'light-blue' ? 'light-blue active' : 'light-blue'} onClick={() => setNovoTema('light-blue')} />
                                <SwitcherSelect className={title === 'light-blue-2' ? 'light-blue-2 active' : 'light-blue-2'} onClick={() => setNovoTema('light-blue-2')} />
                                <SwitcherSelect className={title === 'light-blue-3' ? 'light-blue-3 active' : 'light-blue-3'} onClick={() => setNovoTema('light-blue-3')} />
                                <SwitcherSelect className={title === 'light-green' ? 'light-green active' : 'light-green'} onClick={() => setNovoTema('light-green')} />
                                <SwitcherSelect className={title === 'light-green-2' ? 'light-green-2 active' : 'light-green-2'} onClick={() => setNovoTema('light-green-2')} />
                                <SwitcherSelect className={title === 'light-grey' ? 'light-grey active' : 'light-grey'} onClick={() => setNovoTema('light-grey')} />
                                <SwitcherSelect className={title === 'light-orange' ? 'light-orange active' : 'light-orange'} onClick={() => setNovoTema('light-orange')} />
                                <SwitcherSelect className={title === 'light-purple' ? 'light-purple active' : 'light-purple'} onClick={() => setNovoTema('light-purple')} />
                                <SwitcherSelect className={title === 'light-purple-2' ? 'light-purple-2 active' : 'light-purple-2'} onClick={() => setNovoTema('light-purple-2')} />
                                <SwitcherSelect className={title === 'light-red' ? 'light-red active' : 'light-red'} onClick={() => setNovoTema('light-red')} />
                                <SwitcherSelect className={title === 'light-red-2' ? 'light-red-2 active' : 'light-red-2'} onClick={() => setNovoTema('light-red-2')} />
                                <SwitcherSelect className={title === 'light-yellow' ? 'light-yellow active' : 'light-yellow'} onClick={() => setNovoTema('light-yellow')} />
                            </div>
                        </div>

                    </SwitcherBody>
                </SwitcherPanel>
            </div>
        </>

    );
};

export default ColorSwitcher;
