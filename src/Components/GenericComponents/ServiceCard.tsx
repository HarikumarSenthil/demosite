import React from 'react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  link: string;
  img: string;
}

interface ServiceCardProps extends Service {
  actionIcon: 'learnMore' | 'download' | 'articles' | 'latest' | 'others' | 'news' | 'service';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, img, actionIcon }) => {
  const iconSrc =
    actionIcon === 'learnMore'
      ? '/HomeServiceSection/Arrow Right.svg'
      : actionIcon === 'others'
      ? 'none'
      : '/HomeServiceSection/DownloadIcon.svg';

  const borderClass =
    actionIcon === 'download' || actionIcon === 'others' ? 'border-customBlue' : 'border-transparent';

  return (
    <div className={`border border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200`}>
      <div className={`p-4 ${borderClass}`}>
        <Image
          src={img}
          alt={title}
          className="w-full h-52 object-cover mx-auto"  // Adjusted for mobile responsiveness
          width={50}
          height={52}
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-customBlue font-lato">{title}</h3>
        <p className="text-liteblack text-size-18 mt-2 leading-relaxed mb-5 font-lato">{description}</p>
        {actionIcon !== 'articles' && actionIcon !== 'latest' && actionIcon !== 'news' && (
          <a
            href={link}
            className={`text-customBlue mt-6 mr-10 inline-flex items-center font-bold hover:underline font-lato ${borderClass} border-2 p-4 rounded-md`}
          >
            {actionIcon === 'learnMore' ? 'Learn more' : actionIcon === 'others' ? 'ReadMore' : 'Download'}

            {actionIcon !== 'others' ? (
              <Image
                src={iconSrc}
                alt={actionIcon === 'learnMore' ? 'Arrow Right' : actionIcon === 'download' ? 'Download' : 'Default Alt Text'}
                className="ml-2 w-4 h-4"
                width={6}
                height={4}
              />
            ) : (
              ''
            )}
          </a>
        )}
      </div>
    </div>
  );
};

interface ServiceSectionProps {
  services: Service[];
  actionIcon: 'learnMore' | 'download' | 'articles' | 'latest' | 'others' | 'news';
  title: string;
  description: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  services,
  actionIcon,
  title,
  description,
}) => {
  return (
    <section className="py-20 bg-white text-center mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {actionIcon !== 'articles' && actionIcon !== 'latest' && actionIcon !== 'others' && (
          <>
            <h2 className="text-3xl font-semibold text-darkCustomBlue mb-4 font-lato">{title}</h2>
            <p className="text-liteblack max-w-2xl mx-auto font-lato text-size-20 md:text-size-18">{description}</p>
          </>
        )}

        {actionIcon === 'others' && (
          <h2 className="text-3xl font-semibold text-darkCustomBlue mb-4 font-lato text-left">
            {title}
          </h2>
        )}

        {/* Updated grid layout to be mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} actionIcon={actionIcon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
