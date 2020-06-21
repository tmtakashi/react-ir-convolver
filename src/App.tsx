import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import WaveVisualizer from './components/WaveVisualizer';
import { Context } from './Context';

function App() {
  const [irUri, setIrUri] = useState(`${process.env.PUBLIC_URL}/60x45y.wav`);
  const [sourceUri, setSourceUri] = useState(`${process.env.PUBLIC_URL}/modern-viola-c-major-bow-lift.wav`);

  const irElement = useRef<HTMLMediaElement>(null);
  const sourceElement = useRef<HTMLMediaElement>(null);
  const convolvedElement = useRef<HTMLMediaElement>(null)

  const audioCtx: AudioContext = new AudioContext();
  const convolver: ConvolverNode = audioCtx.createConvolver();
  
  
  const getImpulseBuffer = async function (audioCtx: AudioContext, irUrl: string) {
    return fetch(irUrl)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer));
  };

  useEffect(() => {
    if (sourceElement && sourceElement.current && convolvedElement && convolvedElement.current) {
      const setConvolverBuffer = async function () {
        convolver.buffer = await getImpulseBuffer(audioCtx, irUri);
      };
      setConvolverBuffer();
      const convolvedInput = audioCtx.createMediaElementSource(convolvedElement.current);
      convolvedInput.connect(convolver).connect(audioCtx.destination);
    }
  }, [audioCtx, convolver, irUri])

  const Root = styled.div`
  `;

  const Container = styled.div`
    padding: 5% 10%;
  `;

  const Row = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-around; 
    align-items: center;  
  `;

  const ConvolveSign = styled.div`
    display: inline-block;
    font-size: 50px;
    height: 200px;
    line-height: 200px;
  `;

  const EqualSign = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    transform: rotate(90deg);
    font-size: 50px;
    `;

  return (
    <div className="App">
      <Context.Provider value={{source: {uri: sourceUri, setUri: setSourceUri}, ir: {uri: irUri, setUri: setIrUri}}}>
        <Root>
          <Container>
            <Row>
              <WaveVisualizer audioContext={audioCtx} mediaElement={irElement} uri={irUri} type={'IR'}/> 
              <ConvolveSign>*</ConvolveSign>
              <WaveVisualizer audioContext={audioCtx} mediaElement={sourceElement} uri={sourceUri} type={'SOURCE'}/> 
            </Row>
            <EqualSign>=</EqualSign>
            <WaveVisualizer audioContext={audioCtx} mediaElement={convolvedElement} uri={sourceUri} type={'CONVOLVED'}/> 
          </Container>
        </Root>
      </Context.Provider>
    </div>
  );
}

export default App;
