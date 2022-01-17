import { useState , useCallback ,useEffect} from 'react';

const UseCopyToClipboard = (text) => {
  const [copyStatus, setCopyStatus] = useState('inactive')
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    )
  }, [text])

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus('inactive'), 2500)

    return () => clearTimeout(timeoutId)
  }, [copyStatus])

  return [copyStatus, copy]
}


export default UseCopyToClipboard;
