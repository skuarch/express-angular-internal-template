import { Profile } from './profile';

export class SharedData {

    private static profile: Profile;

    private constructor() {
    }

    static getProfile(): Profile {
        return this.profile;
    }

    static setProfile(profile: Profile): void {
        if (!profile) {
            throw new Error('profile is undefinied');
        }
        if (!profile.prid) {
            throw new Error('profile.prid is undefinied');
        }
        this.profile = profile;
    }

}
