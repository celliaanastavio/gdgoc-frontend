// Judul tips tidak ada di API, dipetakan berdasarkan id kategori.
// Deskripsinya diambil dari field `guidance` API.
export const tipTitles: Record<string, string> = {
  'joining-learning': 'For learning questions',
  collaboration: 'For collaborations',
}

// Tips ke-3 statis: `guidance` API untuk teks ini tercampur dengan judul
// dan menempel di kategori yang tidak cocok.
export const staticTip = {
  title: 'Not sure which category fits?',
  description: 'Choose General inquiry. A clear question is always a good starting point.',
}
