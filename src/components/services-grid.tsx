import {
  ServiceCard,
  ServiceCardBenefitListItem,
  ServiceCardCallToAction,
  ServiceCardDescription,
  ServiceCardList,
  ServiceCardPrice,
  ServiceCardTitle,
} from '@/components/service-card';
import { useMotionValue } from 'framer-motion';
import { type MouseEvent } from 'react';

function ServicesGrid() {
  const mousePositionX = useMotionValue(0);
  const mousePositionY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mousePositionX.set(clientX);
    mousePositionY.set(clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="grid grid-cols-12 gap-6"
    >
      {/* First Row */}
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="col-span-3 lg:col-span-3"
      >
        <div>
          <ServiceCardTitle>Sites web</ServiceCardTitle>
          <ServiceCardDescription>
            We create professional websites tailored to your business needs, ensuring a seamless and
            impactful online presence.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Site web vitrine</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Site web institutionnel</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Création site web</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Site web dynamique</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Référencement SEO</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Audit & Sécurité</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Hébergement web</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="col-span-3 lg:col-span-3"
      >
        <div>
          <ServiceCardTitle>e-Commerce</ServiceCardTitle>
          <ServiceCardDescription>
            Enhance your sales with cutting-edge e-commerce solutions that are user-friendly,
            secure, and efficient.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Site web e-commerce</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Application e-commerce</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="col-span-6 lg:col-span-6"
      >
        <div>
          <ServiceCardTitle>Développement d’applications</ServiceCardTitle>
          <ServiceCardDescription>
            We develop high-performance applications to meet your digital transformation goals.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Application mobile</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Application web</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>
              Développement sur borne interactive
            </ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="col-span-6 lg:col-span-6"
      >
        <div>
          <ServiceCardTitle>Digital Marketing</ServiceCardTitle>
          <ServiceCardPrice>€3,000*</ServiceCardPrice>
          <ServiceCardDescription>
            Boost your brand visibility with effective strategies that deliver measurable results.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Community Management</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Social Media</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Stratégie e-Marketing</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Campagnes publicitaires</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="col-span-6 lg:col-span-6"
      >
        <div>
          <ServiceCardTitle>Consulting Services</ServiceCardTitle>
          <ServiceCardDescription>
            Expert consulting to guide your business to success in tech and digital transformation.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Strategy & roadmap development</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Tech stack evaluation</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Project management consulting</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Risk assessment & mitigation</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Innovation & growth strategies</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
    </div>
  );
}

export { ServicesGrid };
