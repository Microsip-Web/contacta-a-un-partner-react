// state can be any state in Mexico

export interface Partners {
	isOffice?: boolean;
	id: number;
	isInPage: boolean;
	office: string;
	state: string | Array<string>;
	city: string;
	inPageName: string;
	phone: string;
	certificationName: string;
	certificationLevel: number;
	certificationAS: boolean | null;
	email: string;
}
