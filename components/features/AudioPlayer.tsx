'use client';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <div className="bg-black/50 p-4 rounded-lg border border-gray-600 mb-4">
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Váš prohlížeč nepodporuje audio přehrávač.
      </audio>
    </div>
  );
}

