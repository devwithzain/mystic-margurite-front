export type TproductColumnProps = {
   id: bigint;
   title: string;
   price: string;
   description: string;
   image: string;
   created_at: string;
};

export type TtextHoverProps = {
   title1: string;
   title2: string;
};

export type TServicesColumnProps = {
   id: bigint;
   title: string;
   description: string;
   createdAt: string;
};

export type TblogsColumnProps = {
   id: bigint;
   title: string;
   short_description: string;
   description: string;
   category: string;
   image: string;
   comments: string;
   created_at: string;
};

export type TuserProps = {
   id: bigint;
   name: string;
   email: string;
   role: string;
   created_at: string;
};

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type ThooksProps = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
};

export type Order = {
   id: number;
   user: {
      name: string;
      email: string;
   };
   items: OrderItem[];
};

export type OrderItem = {
   service: {
      image: string;
      title: string;
      price: number;
   };
   quantity: number;
};