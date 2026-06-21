import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'countryToFlag',
  standalone: true,
})
export class FlagPipe implements PipeTransform {
    private countryNameToCode: Record<string,string> = {
        'denmark': 'DK',
        'thailand': 'TH',
        'united states': 'US',
        'united states of america': 'US',
        'usa': 'US',
        'ukraine': 'UA',
        'estonia': 'EE',
        'russia': 'RU',
        'france': 'FR',
        'malaysia': 'MY',
        'china': 'CN',
        'macau': 'MO',
        'philippines': 'PH',
        'singapore': 'SG',
        'czechia': 'CZ',
        'czech republic': 'CZ',
        'slovakia': 'SK',
        'croatia': 'HR',
        'romania': 'RO',
        'sweden': 'SE',
        'canada': 'CA',
        'germany': 'DE',
        'netherlands': 'NL',
        'holland': 'NL',
        'australia': 'AU'
    };

  transform(country: string): string {
    const code = country.length === 2
      ? country.toUpperCase()
      : this.countryNameToCode[country.toLowerCase()] || '';
    if (!code) return '';
    // Regional Indicator Symbol Letter A starts at 0x1F1E6
    const first = code.charCodeAt(0) - 0x41 + 0x1F1E6;
    const second = code.charCodeAt(1) - 0x41 + 0x1F1E6;
    return String.fromCodePoint(first, second);
  }
}