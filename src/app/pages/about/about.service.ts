import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('SDE 3 ', 'Walmart labs', 'July 2022 - Present', 'https://www.walmart.com/'),
    new InfoField('Software Engineer 2', 'Thermofisher Scientifice', 'July 2019 - Jul 2022', 'https://www.thermofisher.com/'),
  ];

  private education: InfoField[] = [
    new InfoField(
      'Bachelor of Technology , ECE',
      'NIT Calicut',
      'June 2015 - May 2019','http://www.nitc.ac.in/'
    )
  ];

  private languages: InfoField[] = [
    new InfoField('Malayalam', 'Mother Tounge', ' ', ' '),
    new InfoField('English', 'Profesional competence', ' ', ' ')
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }
}
