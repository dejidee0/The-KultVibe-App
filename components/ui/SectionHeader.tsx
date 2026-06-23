import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

type Props = {
  title: string;
  icon?: IconSvgElement;
  iconColor?: string;
  badge?: string;
  cta?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
};

export default function SectionHeader({
  title,
  icon,
  iconColor = '#10B981',
  badge,
  cta = 'View all',
  ctaHref,
  onCtaClick,
}: Props) {
  const ctaContent = (
    <>
      {cta}
      <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="currentColor" strokeWidth={1.5} />
    </>
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {badge && (
          <span
            className="font-bold text-white rounded px-2 py-0.5"
            style={{ fontSize: 10, background: '#FF4D6D', letterSpacing: '0.06em' }}
          >
            {badge}
          </span>
        )}
        {icon && <HugeiconsIcon icon={icon} size={18} color={iconColor} strokeWidth={1.5} />}
        <h2 className="text-[15px] font-semibold text-white">{title}</h2>
      </div>
      {cta && (
        ctaHref ? (
          <Link
            href={ctaHref}
            className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {ctaContent}
          </Link>
        ) : (
          <button
            onClick={onCtaClick}
            className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {ctaContent}
          </button>
        )
      )}
    </div>
  );
}
