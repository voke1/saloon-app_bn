export class CreateServiceDto {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly imageUrl: string;
  readonly date?: Date;
}
