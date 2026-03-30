export const translations = {
  en: {
    nav: {
      links: ['Problem', 'Solution', 'Mission', 'Contact'],
      hrefs: ['#problem', '#products', '#mission', '#contact'],
      cta: 'Request a Demo',
    },
    hero: {
      badge: 'US Market Launch Soon',
      headline: 'Count less.\nCare more.',
      sub: 'EXION combines AI and robotics to automate pharmacy operations,\nimproving accuracy, efficiency, and patient safety.',
      cta1: 'Request a Demo',
      cta2: 'See How It Works',
      stats: [
        { value: '99.9%+', label: 'Counting Accuracy' },
        { value: '<30s', label: 'Per Prescription' },
        { value: '0', label: 'Miscounts in Pilot' },
      ],
    },
    problem: {
      tag: 'The Problem',
      headline: 'Manual counting is',
      headlineAccent: 'breaking pharmacies.',
      sub: 'A single miscount can reach a patient. Manual pill counting makes this risk inevitable — every single day.',
      stats: [
        {
          value: '6.9B',
          label: 'Prescriptions dispensed in the US per year',
          source: 'IQVIA Institute, Use of Medicines in the U.S., 2024',
        },
        {
          value: '117M',
          label: 'Dispensing errors in the US per year',
          source: 'Flynn & Barker, J Am Pharm Assoc, 2003 · Um et al., 2024',
        },
        {
          value: '$21B',
          label: 'Annual cost of preventable medication errors',
          source: 'National Academies, Preventing Medication Errors, 2006',
        },
      ],
    },
    products: {
      tag: 'The Solution',
      headline: 'Finally built for\nreal pharmacies.',
      sub: 'Every design, every detail, inspired by your voice.\nEXION is the dependable partner quietly empowering your professional care',
      roadmap: [
        {
          year: '2026',
          badge: 'Launching Soon',
          name: 'EXION DX',
          desc: 'Tabletop pill counter. \n All-in-One solution, no installation required.',
        },
        {
          year: '2027',
          badge: 'In Development',
          name: 'EXION EX',
          desc: 'Multi-joint robotic arm for fully automated dispensing. Built entirely in-house for unmatched price competitiveness.',
        },
        {
          year: '2028',
          badge: 'Coming Soon',
          name: 'EXION V-1',
          desc: 'Intelligent medication storage cabinet. Automated dispensing and inventory management at the point of care.',
        },
      ],
      checklist: [
        {
          title: 'AI Counting',
          desc: 'On-device AI counts every pill in real time — delivering accuracy no manual process can match.',
        },
        {
          title: 'AI Classification',
          desc: 'Identifies and sorts pills by type. Mixed medications are flagged instantly before they reach the patient.',
        },
        {
          title: 'Contaminant Detection',
          desc: 'Automatically detects foreign objects, broken tablets, and contamination at the point of dispensing.',
        },
      ],
    },
    mission: {
      tag: 'Our Mission',
      headline:
        'Automating the routine.\n Freeing pharmacists to focus on care.',
      body: 'EXIONLabs was created to reduce the risks of manual work and return the time lost to repetitive counting back to patient care. Every dispense should be safe, and every pharmacist’s time should be spent on patients—not pills.',
      values: [
        {
          num: '01',
          title: 'Pharmacist-Centered',
          desc: 'We design with pharmacists, not just for them. Every workflow decision is validated against real pharmacy environments.',
        },
        {
          num: '02',
          title: 'Accuracy First',
          desc: 'Every feature we build traces back to one goal: zero miscounts. There is no acceptable error rate when patient safety is at stake.',
        },
        {
          num: '03',
          title: 'Compliance by Default',
          desc: 'Documentation and audit trails are built into the product, not bolted on. Full regulatory compliance should require zero extra effort.',
        },
      ],
    },
    contact: {
      tag: 'Get in Touch',
      headline: 'Ready to see EXION\nin action?',
      sub: "Whether you're a pharmacy owner, healthcare organization, or investor — we'd love to connect.",
      options: [
        {
          title: 'Request a Demo',
          desc: 'See EXION counting in real time — at your pharmacy or via a virtual walkthrough.',
          subject: 'Demo Request',
        },
        {
          title: 'Join Early Access',
          desc: 'Be among the first pharmacies to deploy EXION before the official US launch.',
          subject: 'Early Access',
        },
        {
          title: 'Partner with Us',
          desc: "Interested in distributing or integrating EXION? Let's build something together.",
          subject: 'Partnership',
        },
      ],
      emailLabel: 'Or reach us directly',
      email: 'support@exionlabs.ai',
    },
    footer: {
      tagline: 'Automating pharmacy. Protecting patients.',
      links: [
        { label: 'Problem', href: '#problem' },
        { label: 'Solution', href: '#products' },
        { label: 'Mission', href: '#mission' },
        { label: 'Contact', href: '#contact' },
      ],
      email: 'support@exionlabs.ai',
      phone: '053-585-0518',
      address: '329, Seongseo-ro, Dalseo-gu, Daegu, Republic of Korea',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      rights: 'All rights reserved.',
    },
  },
  ko: {
    nav: {
      links: ['문제', '솔루션', '미션', '문의'],
      hrefs: ['#problem', '#products', '#mission', '#contact'],
      cta: '데모 신청',
    },
    hero: {
      badge: '미국 시장 출시 예정',
      headline: '단순 반복은 줄이고,\n환자 케어에 집중하세요.',
      sub: 'EXION은 AI와 로보틱스로 약국 운영을 자동화하여\n더 정확하고 효율적인 조제 환경을 만듭니다.',
      cta1: '데모 신청',
      cta2: '작동 방식 보기',
      stats: [
        { value: '99.9%+', label: '조제 정확도' },
        { value: '<30초', label: '처방당 소요 시간' },
        { value: '0건', label: '파일럿 오계수' },
      ],
    },
    problem: {
      tag: 'The problem',
      headline: '수동 계수는',
      headlineAccent: '약국 운영의 리스크입니다.',
      sub: '단 한 알의 실수도 환자에게는 치명적일 수 있습니다. 수작업 조제는 이러한 위험을 매일 반복적으로 발생시킵니다.',
      stats: [
        {
          value: '69억 건',
          label: '미국 연간 처방 조제 건수',
          source: 'IQVIA Institute, Use of Medicines in the U.S., 2024',
        },
        {
          value: '1.17억 건',
          label: '미국 연간 조제 오류 건수',
          source: 'Flynn & Barker, J Am Pharm Assoc, 2003 · Um et al., 2024',
        },
        {
          value: '31.5조 원',
          label: '약물 오류로 인한 연간 손실',
          source: 'National Academies, Preventing Medication Errors, 2006',
        },
      ],
    },
    products: {
      tag: 'The Solution',
      headline: '실제 약국을 위해\n만들어졌습니다.',
      sub: '모든 설계와 디테일은 약사의 목소리에서 시작되었습니다.\n EXION은 전문적인 케어를 든든하게 뒷받침하는 신뢰할 수 있는 파트너입니다 ',
      roadmap: [
        {
          year: '2026',
          badge: '출시 예정',
          name: 'EXION DX',
          desc: '카운팅·분류·이물질 감지를 하나로 통합한 올인원 장비. 컴팩트한 설계로 공간 활용도를 높였습니다.',
        },
        {
          year: '2027',
          badge: '개발 중',
          name: 'EXION EX',
          desc: '다관절 로봇 기반의 완전 자동화 조제 장비. 핵심 부품 자체 제작으로 압도적인 가격 경쟁력을 실현합니다.',
        },
        {
          year: '2028',
          badge: '출시 예정',
          name: 'EXION V-1',
          desc: '지능형 약품 보관 캐비닛. 로봇 기반 자동 이송을 통해 조제 효율과 실시간 재고 관리를 동시에 지원합니다.',
        },
      ],
      checklist: [
        {
          title: 'AI 카운팅',
          desc: '온디바이스 AI가 모든 알약을 실시간으로 계수하여 높은 정확도와 빠른 처리 속도를 제공합니다.',
        },
        {
          title: 'AI 분류',
          desc: '약품 종류를 자동으로 식별하고 분류합니다. 혼입된 약품은 환자에게 전달되기 전에 즉시 차단합니다.',
        },
        {
          title: '이물질 감지',
          desc: '이물질이나 파손된 알약을 조제 과정에서 자동으로 감지하여 환자 안전을 강화합니다.',
        },
      ],
    },
    mission: {
      tag: 'Our Mission',
      headline: '반복 업무는 자동화하고\n약사는 환자 케어에 집중합니다.',
      body: 'EXIONLabs는 수작업으로 인한 리스크를 줄이고, 반복적인 계수 업무에 빼앗기던 약사의 시간을 환자 케어로 돌려드리기 위해 탄생했습니다. 모든 조제는 안전해야 하며, 약사의 시간은 알약이 아닌 환자를 위해 쓰여야 합니다.',
      values: [
        {
          num: '01',
          title: '약사 중심 설계',
          desc: '실제 약국 현장을 기반으로, 약사와 함께 설계된 워크플로우를 제공합니다.',
        },
        {
          num: '02',
          title: '정확성 최우선',
          desc: '모든 기능은 계수 오류 제로와 환자 안전이라는 하나의 목표를 위해 설계되었습니다.',
        },
        {
          num: '03',
          title: '자동 문서화 및 이력 추적',
          desc: '문서화와 감사 추적 기능이 기본 내장되어 규정 준수를 자동화합니다.',
        },
      ],
    },
    contact: {
      tag: 'Get in Touch',
      headline: 'EXION을 직접\n확인해보세요.',
      sub: '약국 운영자, 의료 기관, 투자자 — 어떤 문의든 환영합니다.',
      options: [
        {
          title: '데모 신청',
          desc: '약국 현장 또는 온라인으로 EXION의 실제 작동을 확인해보세요.',
          subject: 'Demo Request',
        },
        {
          title: '사전 도입 신청',
          desc: '미국 공식 출시 전 EXION을 가장 먼저 도입하는 약국이 되어보세요.',
          subject: 'Early Access',
        },
        {
          title: '파트너 제안',
          desc: 'EXION 기술의 유통 또는 통합에 관심 있으신가요? 함께 만들어가겠습니다.',
          subject: 'Partnership',
        },
      ],
      emailLabel: '직접 연락하기',
      email: 'support@exionlabs.ai',
    },
    footer: {
      tagline: '약국을 자동화하고, 환자를 보호합니다.',
      links: [
        { label: '문제', href: '#problem' },
        { label: '솔루션', href: '#products' },
        { label: '미션', href: '#mission' },
        { label: '문의', href: '#contact' },
      ],
      email: 'support@exionlabs.ai',
      phone: '053-585-0518',
      address: '대구광역시 달서구 성서로 329 (동원비즈플랫폼), 306호',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      rights: 'All rights reserved.',
    },
  },
};

export type Lang = 'en' | 'ko';
export type T = typeof translations.en;
