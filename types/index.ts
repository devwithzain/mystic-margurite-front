export type TheadingProps = {
   title: string;
   description: string;
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
   updated_at: string;
};

export type TcategoryColumnProps = {
   id: bigint;
   title: string;
   created_at: string;
};

export type TmodallProps = {
   title: string;
   description: string;
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

export type TuseAlerteModalProps = {
   loading?: boolean;
   isOpen: boolean;
   onClose: () => void;
   onConfirm: () => void;
};

export type TuserProps = {
   id: bigint;
   name: string;
   email: string;
   image: string;
   role: string;
   created_at: string | Date;
   updated_at: string | Date;
};

export type TsubscribersColumnProps = {
   id: string;
   email: string;
   created_at: string;
};

export type TtimeslotsColumnProps = {
   id: string;
   user_id: string;
   date: string;
   start_time: string;
   end_time: string;
   status: string;
   created_at: string;
};

export type TordersProps = {
   id: number;
   status: string;
   created_at: string;
   updated_at: string;
   checkout_detail?: {
      first_name?: string;
      email?: string;
      phone?: string;
   };
   items: {
      quantity: number;
      product?: {
         price: string;
      };
   }[];
};

export type TbookingsProps = {
   id: number;
   status: string;
   created_at: string;
   booking_detail?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      country?: string;
      street_address?: string;
      town_city?: string;
      state?: string;
      zip?: string;
      timezone?: string;
      notes?: string;
      time_slot_id?: string;
      start_time?: string;
      end_time?: string;
      date?: string;
      meeting_link?: string;
      status?: string;
      birth_date?: string;
      birth_time?: string;
      birth_place?: string;
   };
   items: {
      service?: {
         price: string;
      };
   }[];
};

export type TserviceColumnProps = {
   id: bigint;
   title: string;
   price: string;
   description: string;
   image: string;
   created_at: string;
};

export type TproductsColumnProps = {
   id: bigint;
   title: string;
   price: string;
   description: string;
   image: string;
   created_at: string;
};

export type TforgotPasswordProps = {
   setShowForgotPassword: (value: boolean) => void;
   showEnterCode: boolean;
   setShowEnterCode: (value: boolean) => void;
   email: string;
   setEmail: (value: string) => void;
   code: string;
   setCode: (value: string) => void;
};

export type TgraphData = {
   name: string;
   total: number;
};

export type ThooksProps = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
};

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type TRoundedProps = {
   children: React.ReactNode;
   className?: string;
   backgroundColor: string;
};

export type TServicesColumnProps = {
   id: bigint;
   title: string;
   price: string;
   description: string;
   image: string;
   createdAt: string;
};

export type TproductColumnProps = {
   id: bigint;
   title: string;
   price: string;
   description: string;
   image: string;
   created_at: string;
};

export type TcartColumnProps = {
   id: bigint;
   user_id: bigint;
   product_id: bigint;
   product: TproductsColumnProps;
   created_at: Date | null;
   updated_at: Date | null;
};

export type Order = {
   id: number;
   user: {
      name: string;
      email: string;
   };
   items: OrderItem[];
   status: string;
   checkout_detail: {
      first_name: string;
      last_name: string;
      address: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      phone: string;
      email: string;
   };
};

export type OrderItem = {
   product: {
      image: string;
      title: string;
      price: number;
   };
   quantity: number;
};

export type TcartContextType = {
   cartCount: number;
   isCartOpen: boolean;
   toggleCart: () => void;
   refreshCart: () => void;
   closeCart: () => void;
};