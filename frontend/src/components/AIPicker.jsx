import React from 'react';

import CustomButton from './CustomButton';

function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
  const openAIAPIUnavailableMessage = 'OpenAI API is currently not available';

  return (
    <div className="aipicker-container">
      <textarea
        placeholder={openAIAPIUnavailableMessage}
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title={openAIAPIUnavailableMessage}
            customStyles="text-xs"
            disabled
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
              disabled
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
              disabled
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
