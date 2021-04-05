import React, {
  FC,
  useState,
  useCallback
} from 'react';

export interface BackendResponseWidgetProps {
  backend: {
    getTextToDisplay: () => Promise < {
      message: string
    } >
  }
}

export const BackendResponseWidget: FC < BackendResponseWidgetProps > = ({
  backend
}) => {
  const [text, setText] = useState('none text yet');
  const retrieveText = useCallback(
    () => backend.getTextToDisplay()
    .then(response => setText(response.message)),
    [backend]
  )

  return ( <
    div >
    <
    button onClick = {
      retrieveText
    } > click here to retrieve new message from backend < /button> <
    div style = {
      {
        marginTop: '10px'
      }
    } > {
      text
    } <
    /div> <
    /div>
  )
}