import { APIRequestContext } from '@playwright/test';

export class MemberAPI {

constructor(
private request: APIRequestContext
) {}

async getMember(
memberId: string
) {

return await this.request.get(
`/api/members/${memberId}`
);
}

async getPolicies(
memberId: string
) {

return await this.request.get(
`/api/members/${memberId}/policies`
);
}

async getClaims(
memberId: string
) {

return await this.request.get(
`/api/members/${memberId}/claims`
);
}

async getBilling(
memberId: string
) {

return await this.request.get(
`/api/members/${memberId}/billing`
);
}
}