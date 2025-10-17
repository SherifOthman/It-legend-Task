export const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  return (
    <div className="flex h-[90vh] w-[90vw] max-w-[700px] items-center justify-center p-2 pt-13">
      <iframe
        src={fileUrl}
        title="PDF Viewer"
        className="h-full w-full rounded-md border-none"
      />
    </div>
  );
};
