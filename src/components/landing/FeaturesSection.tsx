import { Heading } from '../ui/heading';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { featuresData } from '@/helper/features-data';
import Image from 'next/image';

const imageConfig = {
    features: {
        src: "/images/meet.jpg",
        alt: "Team meeting showing WhizBot features in action",
        aspectRatio: "4/3",
        sizes: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280
        }
    }
};

const FeaturesSection = () => {
    return (
        <section
            className="container mx-auto py-20 p-5"
            aria-labelledby="features-heading"
        >
            <div className="max-w-2xl mx-auto text-center">
                <Heading variant="h2" id="features-heading">
                    Explore the Features
                </Heading>
                <p className="text-muted-foreground mt-4">
                    Whizbot provides a range of features to enhance your customer interactions.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-10 w-full">
                {/* Features Cards */}
                <div className="flex flex-col gap-4 flex-1">
                    {featuresData.map((data, index) => (
                        <Card
                            key={index}
                            className={index === 0 ? "bg-secondary" : ""}
                        >
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar>
                                    <AvatarFallback
                                        className={index === 0 ? "bg-primary text-muted" : ""}
                                        aria-hidden="true"
                                    >
                                        {data.icon}
                                    </AvatarFallback>
                                </Avatar>

                                <div>
                                    <CardTitle>
                                        {data.title}
                                    </CardTitle>
                                    <CardDescription
                                        className={index === 0 ? "text-primary" : ""}
                                    >
                                        {data.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Features Image */}
                <div className="relative flex-1 min-h-[400px] lg:min-h-0">
                    <div className="absolute inset-0">
                        <div className="relative w-full h-full">
                            <Image
                                alt={imageConfig.features.alt}
                                src={imageConfig.features.src}
                                fill
                                sizes={`
                                    (max-width: ${imageConfig.features.sizes.sm}px) 100vw,
                                    (max-width: ${imageConfig.features.sizes.md}px) 100vw,
                                    (max-width: ${imageConfig.features.sizes.lg}px) 50vw,
                                    40vw
                                `}
                                className="object-cover rounded-xl"
                                quality={90}
                                priority={false}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;