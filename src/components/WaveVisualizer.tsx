import * as React from 'react';
import Peaks, { PeaksOptions } from 'peaks.js';
import { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

interface Props {
  audioContext: AudioContext;
  mediaElement: React.RefObject<HTMLMediaElement>;
  uri: string;
  type: 'IR' | 'SOURCE' | 'CONVOLVED';
}

const WaveVisualizer = ({audioContext, mediaElement, uri, type}: Props) => {
  const context = useContext(Context);
  const overViewContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
      const isOverViewConstainer: boolean = Boolean(overViewContainer && overViewContainer.current);
      const isMediaElement: boolean = Boolean(mediaElement && mediaElement.current);
      if (isOverViewConstainer && isMediaElement) {
        const options: PeaksOptions = {
          containers: {
            overview: overViewContainer.current,
          },
          mediaElement: mediaElement.current as Element,
          webAudio: {
            audioContext: audioContext,
          },
          playheadColor: '#333',
        }
        Peaks.init(options, (err, peaks) => {
          if (err) {
            console.error('failed: ', err.message);
            return;
          }

        }) 
      }
  }, [audioContext, mediaElement])

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const createObjectURL = (window.URL || window.webkitURL).createObjectURL;
      let uri
      switch (type) {
        case "IR":
          uri = createObjectURL(e.target.files[0]);
          context.ir.setUri(uri);
          break;
        case "SOURCE" || "CONVOLVED":
          uri = createObjectURL(e.target.files[0]);
          context.source.setUri(uri);
          break;
      
        default:
          break;
      }
    }
  }

  const OverViewContainer = styled.div`
    border: 1px solid #777;
  `;

  return (
      <div>
        {type !== 'CONVOLVED' && <input type="file" onChange={onFileChange}></input>}
        <OverViewContainer ref={overViewContainer}/>
        <audio controls ref={mediaElement}>
          <source src={uri} type="audio/wav"/>
        </audio>
      </div>
  )
}

export default WaveVisualizer;