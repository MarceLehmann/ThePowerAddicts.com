import React, { useEffect } from 'react';

interface StructuredDataProps {
  id: string;
  data: object;
}

const StructuredData: React.FC<StructuredDataProps> = ({ id, data }) => {
  useEffect(() => {
    let script = document.getElementById(id);
    if (!script) {
      // FIX: The `script` variable is typed as HTMLElement, which does not have a `type` property.
      // By creating a new `newScript` constant, TypeScript correctly infers its type as
      // HTMLScriptElement, resolving the error when setting the `type` property.
      const newScript = document.createElement('script');
      newScript.id = id;
      newScript.type = 'application/ld+json';
      document.head.appendChild(newScript);
      script = newScript;
    }
    script.innerHTML = JSON.stringify(data, null, 2);

    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [id, data]);

  return null;
};

export default StructuredData;
