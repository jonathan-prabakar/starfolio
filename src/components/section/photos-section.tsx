import { DATA } from "@/data/resume";

export default function PhotosSection() {
  const photos = DATA.photos;

  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  return (
    <section id="photos">
      <div className="flex min-h-0 flex-col gap-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {DATA.sections.photos.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[col1, col2, col3].map((col, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {col.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="rounded-lg object-cover w-full"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}