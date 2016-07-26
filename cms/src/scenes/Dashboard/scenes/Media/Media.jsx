import React from 'react';
import S3Uploader from 'components/atm.s3Uploader';

const Media = props => {
  return (
     <div>
       <S3Uploader
         signingUrl="/s3/sign"
         accept="image/*"
         onProgress={ S3Uploader.onUploadProgress }
         onError={ S3Uploader.onUploadError }
         onFinish={ S3Uploader.onUploadFinish }

         uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
         contentDisposition="auto"
         server="http://localhost:3000/api/v1"
       />
     </div>
  );
};

export default Media;
