const dataUsers = [
  {
    gender: 'female',
    name: 'Ediane Araújo',
    age: 66,
    avatar: 'https://randomuser.me/api/portraits/med/women/13.jpg',
  },
  {
    gender: 'female',
    name: 'Nara Porto',
    age: 70,
    avatar: 'https://randomuser.me/api/portraits/med/women/77.jpg',
  },
  {
    gender: 'female',
    name: 'Serafina da Cruz',
    age: 66,
    avatar: 'https://randomuser.me/api/portraits/med/women/3.jpg',
  },
  {
    gender: 'male',
    name: 'Eliseu Castro',
    age: 48,
    avatar: 'https://randomuser.me/api/portraits/med/men/24.jpg',
  },
  {
    gender: 'female',
    name: 'Luciara Cavalcanti',
    age: 69,
    avatar: 'https://randomuser.me/api/portraits/med/women/3.jpg',
  },
  {
    gender: 'male',
    name: 'Luciano Nunes',
    age: 39,
    avatar: 'https://randomuser.me/api/portraits/med/men/86.jpg',
  },
  {
    gender: 'female',
    name: 'Gertrudes Santos',
    age: 26,
    avatar: 'https://randomuser.me/api/portraits/med/women/25.jpg',
  },
  {
    gender: 'female',
    name: 'Anick da Rocha',
    age: 74,
    avatar: 'https://randomuser.me/api/portraits/med/women/60.jpg',
  },
  {
    gender: 'male',
    name: 'Evangelino Almeida',
    age: 36,
    avatar: 'https://randomuser.me/api/portraits/med/men/20.jpg',
  },
  {
    gender: 'male',
    name: 'Aléxio Rezende',
    age: 46,
    avatar: 'https://randomuser.me/api/portraits/med/men/28.jpg',
  },
  {
    gender: 'female',
    name: 'Angélica Fernandes',
    age: 33,
    avatar: 'https://randomuser.me/api/portraits/med/women/31.jpg',
  },
  {
    gender: 'female',
    name: 'Maiara Costa',
    age: 73,
    avatar: 'https://randomuser.me/api/portraits/med/women/1.jpg',
  },
  {
    gender: 'female',
    name: 'Dena da Luz',
    age: 65,
    avatar: 'https://randomuser.me/api/portraits/med/women/78.jpg',
  },
  {
    gender: 'female',
    name: 'Naiara Pires',
    age: 22,
    avatar: 'https://randomuser.me/api/portraits/med/women/81.jpg',
  },
  {
    gender: 'male',
    name: 'Esmeraldo Santos',
    age: 61,
    avatar: 'https://randomuser.me/api/portraits/med/men/61.jpg',
  },
  {
    gender: 'female',
    name: 'Lauriete Castro',
    age: 63,
    avatar: 'https://randomuser.me/api/portraits/med/women/77.jpg',
  },
  {
    gender: 'male',
    name: 'Eduíno Castro',
    age: 69,
    avatar: 'https://randomuser.me/api/portraits/med/men/95.jpg',
  },
  {
    gender: 'male',
    name: 'Neóteles Costa',
    age: 24,
    avatar: 'https://randomuser.me/api/portraits/med/men/17.jpg',
  },
  {
    gender: 'male',
    name: 'Célsio Fernandes',
    age: 70,
    avatar: 'https://randomuser.me/api/portraits/med/men/41.jpg',
  },
  {
    gender: 'female',
    name: 'Delani Alves',
    age: 35,
    avatar: 'https://randomuser.me/api/portraits/med/women/36.jpg',
  },
  {
    gender: 'male',
    name: 'Elmano Novaes',
    age: 62,
    avatar: 'https://randomuser.me/api/portraits/med/men/46.jpg',
  },
  {
    gender: 'female',
    name: 'Nathielle Teixeira',
    age: 54,
    avatar: 'https://randomuser.me/api/portraits/med/women/75.jpg',
  },
  {
    gender: 'male',
    name: 'Mirco Lopes',
    age: 67,
    avatar: 'https://randomuser.me/api/portraits/med/men/88.jpg',
  },
  {
    gender: 'female',
    name: 'Bia Farias',
    age: 50,
    avatar: 'https://randomuser.me/api/portraits/med/women/66.jpg',
  },
  {
    gender: 'male',
    name: 'Susano Aragão',
    age: 37,
    avatar: 'https://randomuser.me/api/portraits/med/men/19.jpg',
  },
  {
    gender: 'female',
    name: 'Luenem Ribeiro',
    age: 43,
    avatar: 'https://randomuser.me/api/portraits/med/women/32.jpg',
  },
  {
    gender: 'male',
    name: 'Adónis Nunes',
    age: 68,
    avatar: 'https://randomuser.me/api/portraits/med/men/56.jpg',
  },
  {
    gender: 'male',
    name: 'Juno Nunes',
    age: 23,
    avatar: 'https://randomuser.me/api/portraits/med/men/36.jpg',
  },
  {
    gender: 'female',
    name: 'Brígida Monteiro',
    age: 60,
    avatar: 'https://randomuser.me/api/portraits/med/women/32.jpg',
  },
  {
    gender: 'female',
    name: 'Léia Silva',
    age: 36,
    avatar: 'https://randomuser.me/api/portraits/med/women/51.jpg',
  },
  {
    gender: 'female',
    name: 'Almerinda Almeida',
    age: 34,
    avatar: 'https://randomuser.me/api/portraits/med/women/12.jpg',
  },
  {
    gender: 'male',
    name: 'Aniceto Barbosa',
    age: 66,
    avatar: 'https://randomuser.me/api/portraits/med/men/68.jpg',
  },
  {
    gender: 'female',
    name: 'Monique Nascimento',
    age: 75,
    avatar: 'https://randomuser.me/api/portraits/med/women/92.jpg',
  },
  {
    gender: 'female',
    name: 'Rúbia Oliveira',
    age: 44,
    avatar: 'https://randomuser.me/api/portraits/med/women/83.jpg',
  },
  {
    gender: 'male',
    name: 'Ildefonso Martins',
    age: 26,
    avatar: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
  {
    gender: 'female',
    name: 'Dilza Rodrigues',
    age: 24,
    avatar: 'https://randomuser.me/api/portraits/med/women/11.jpg',
  },
  {
    gender: 'female',
    name: 'Hemelyn Rocha',
    age: 67,
    avatar: 'https://randomuser.me/api/portraits/med/women/32.jpg',
  },
  {
    gender: 'male',
    name: 'Alexandro Melo',
    age: 74,
    avatar: 'https://randomuser.me/api/portraits/med/men/57.jpg',
  },
  {
    gender: 'female',
    name: 'Andréa Duarte',
    age: 22,
    avatar: 'https://randomuser.me/api/portraits/med/women/23.jpg',
  },
  {
    gender: 'female',
    name: 'Loreta Nascimento',
    age: 28,
    avatar: 'https://randomuser.me/api/portraits/med/women/80.jpg',
  },
  {
    gender: 'female',
    name: 'Cinira Rodrigues',
    age: 24,
    avatar: 'https://randomuser.me/api/portraits/med/women/67.jpg',
  },
  {
    gender: 'male',
    name: 'Fábio Jesus',
    age: 55,
    avatar: 'https://randomuser.me/api/portraits/med/men/15.jpg',
  },
  {
    gender: 'female',
    name: 'Vanderléia Gonçalves',
    age: 69,
    avatar: 'https://randomuser.me/api/portraits/med/women/64.jpg',
  },
  {
    gender: 'male',
    name: 'Argemiro da Rosa',
    age: 31,
    avatar: 'https://randomuser.me/api/portraits/med/men/87.jpg',
  },
  {
    gender: 'male',
    name: 'Romano Rodrigues',
    age: 41,
    avatar: 'https://randomuser.me/api/portraits/med/men/52.jpg',
  },
  {
    gender: 'female',
    name: 'Enilda Monteiro',
    age: 35,
    avatar: 'https://randomuser.me/api/portraits/med/women/7.jpg',
  },
  {
    gender: 'male',
    name: 'Salomão de Souza',
    age: 32,
    avatar: 'https://randomuser.me/api/portraits/med/men/44.jpg',
  },
  {
    gender: 'male',
    name: 'Lorival Mendes',
    age: 38,
    avatar: 'https://randomuser.me/api/portraits/med/men/84.jpg',
  },
  {
    gender: 'male',
    name: 'Natanael Teixeira',
    age: 47,
    avatar: 'https://randomuser.me/api/portraits/med/men/21.jpg',
  },
  {
    gender: 'male',
    name: 'Davino da Cunha',
    age: 33,
    avatar: 'https://randomuser.me/api/portraits/med/men/19.jpg',
  },
  {
    gender: 'male',
    name: 'Filinto Moraes',
    age: 33,
    avatar: 'https://randomuser.me/api/portraits/med/men/37.jpg',
  },
  {
    gender: 'male',
    name: 'Élton Ramos',
    age: 29,
    avatar: 'https://randomuser.me/api/portraits/med/men/34.jpg',
  },
  {
    gender: 'male',
    name: 'Dércio Lopes',
    age: 56,
    avatar: 'https://randomuser.me/api/portraits/med/men/25.jpg',
  },
  {
    gender: 'female',
    name: 'Blanche Nunes',
    age: 62,
    avatar: 'https://randomuser.me/api/portraits/med/women/96.jpg',
  },
  {
    gender: 'male',
    name: 'Clóvis Nunes',
    age: 40,
    avatar: 'https://randomuser.me/api/portraits/med/men/20.jpg',
  },
  {
    gender: 'male',
    name: 'Sabino da Luz',
    age: 40,
    avatar: 'https://randomuser.me/api/portraits/med/men/73.jpg',
  },
  {
    gender: 'male',
    name: 'Anania Novaes',
    age: 67,
    avatar: 'https://randomuser.me/api/portraits/med/men/41.jpg',
  },
  {
    gender: 'male',
    name: 'Telmo Sales',
    age: 50,
    avatar: 'https://randomuser.me/api/portraits/med/men/70.jpg',
  },
  {
    gender: 'male',
    name: 'Homero Pinto',
    age: 26,
    avatar: 'https://randomuser.me/api/portraits/med/men/95.jpg',
  },
  {
    gender: 'male',
    name: 'Lutero da Paz',
    age: 66,
    avatar: 'https://randomuser.me/api/portraits/med/men/24.jpg',
  },
  {
    gender: 'female',
    name: 'Júnia Pinto',
    age: 57,
    avatar: 'https://randomuser.me/api/portraits/med/women/22.jpg',
  },
  {
    gender: 'female',
    name: 'Sirene Oliveira',
    age: 35,
    avatar: 'https://randomuser.me/api/portraits/med/women/24.jpg',
  },
  {
    gender: 'male',
    name: 'Maurício Silveira',
    age: 31,
    avatar: 'https://randomuser.me/api/portraits/med/men/60.jpg',
  },
  {
    gender: 'female',
    name: 'Wanda Dias',
    age: 56,
    avatar: 'https://randomuser.me/api/portraits/med/women/69.jpg',
  },
  {
    gender: 'male',
    name: 'Alexandro das Neves',
    age: 58,
    avatar: 'https://randomuser.me/api/portraits/med/men/78.jpg',
  },
  {
    gender: 'male',
    name: 'Evelásio Fogaça',
    age: 40,
    avatar: 'https://randomuser.me/api/portraits/med/men/90.jpg',
  },
  {
    gender: 'female',
    name: 'Francinéia Ramos',
    age: 70,
    avatar: 'https://randomuser.me/api/portraits/med/women/63.jpg',
  },
  {
    gender: 'female',
    name: 'Aimê Moraes',
    age: 24,
    avatar: 'https://randomuser.me/api/portraits/med/women/60.jpg',
  },
  {
    gender: 'female',
    name: 'Sonja Ribeiro',
    age: 59,
    avatar: 'https://randomuser.me/api/portraits/med/women/5.jpg',
  },
  {
    gender: 'female',
    name: 'Lissandra Castro',
    age: 41,
    avatar: 'https://randomuser.me/api/portraits/med/women/81.jpg',
  },
  {
    gender: 'male',
    name: 'Delmiro Silveira',
    age: 33,
    avatar: 'https://randomuser.me/api/portraits/med/men/47.jpg',
  },
  {
    gender: 'female',
    name: 'Olvani Pires',
    age: 45,
    avatar: 'https://randomuser.me/api/portraits/med/women/6.jpg',
  },
  {
    gender: 'male',
    name: 'Dário Ramos',
    age: 61,
    avatar: 'https://randomuser.me/api/portraits/med/men/62.jpg',
  },
  {
    gender: 'male',
    name: 'Vito da Costa',
    age: 68,
    avatar: 'https://randomuser.me/api/portraits/med/men/91.jpg',
  },
  {
    gender: 'male',
    name: 'Job Nunes',
    age: 75,
    avatar: 'https://randomuser.me/api/portraits/med/men/37.jpg',
  },
  {
    gender: 'male',
    name: 'Tarsício Melo',
    age: 66,
    avatar: 'https://randomuser.me/api/portraits/med/men/28.jpg',
  },
  {
    gender: 'female',
    name: 'Dera Lima',
    age: 49,
    avatar: 'https://randomuser.me/api/portraits/med/women/73.jpg',
  },
  {
    gender: 'female',
    name: 'Yara Ribeiro',
    age: 68,
    avatar: 'https://randomuser.me/api/portraits/med/women/96.jpg',
  },
  {
    gender: 'female',
    name: 'Dora da Mata',
    age: 29,
    avatar: 'https://randomuser.me/api/portraits/med/women/91.jpg',
  },
  {
    gender: 'male',
    name: 'Josselino Rezende',
    age: 62,
    avatar: 'https://randomuser.me/api/portraits/med/men/55.jpg',
  },
  {
    gender: 'male',
    name: 'Caíco Barbosa',
    age: 41,
    avatar: 'https://randomuser.me/api/portraits/med/men/96.jpg',
  },
  {
    gender: 'male',
    name: 'Aventino Ribeiro',
    age: 74,
    avatar: 'https://randomuser.me/api/portraits/med/men/78.jpg',
  },
  {
    gender: 'male',
    name: 'Andreo Rocha',
    age: 35,
    avatar: 'https://randomuser.me/api/portraits/med/men/88.jpg',
  },
  {
    gender: 'male',
    name: 'Dilan Carvalho',
    age: 64,
    avatar: 'https://randomuser.me/api/portraits/med/men/32.jpg',
  },
  {
    gender: 'female',
    name: 'Ainhoa Rezende',
    age: 47,
    avatar: 'https://randomuser.me/api/portraits/med/women/15.jpg',
  },
  {
    gender: 'female',
    name: 'Niara Ribeiro',
    age: 72,
    avatar: 'https://randomuser.me/api/portraits/med/women/54.jpg',
  },
  {
    gender: 'male',
    name: 'Enes Vieira',
    age: 38,
    avatar: 'https://randomuser.me/api/portraits/med/men/11.jpg',
  },
  {
    gender: 'male',
    name: 'Romarigo Barros',
    age: 53,
    avatar: 'https://randomuser.me/api/portraits/med/men/88.jpg',
  },
  {
    gender: 'male',
    name: 'Lótus Peixoto',
    age: 73,
    avatar: 'https://randomuser.me/api/portraits/med/men/8.jpg',
  },
  {
    gender: 'male',
    name: 'Policarpo Aragão',
    age: 64,
    avatar: 'https://randomuser.me/api/portraits/med/men/27.jpg',
  },
  {
    gender: 'female',
    name: 'Aidê Santos',
    age: 53,
    avatar: 'https://randomuser.me/api/portraits/med/women/57.jpg',
  },
  {
    gender: 'female',
    name: 'Gaudência Moreira',
    age: 36,
    avatar: 'https://randomuser.me/api/portraits/med/women/13.jpg',
  },
  {
    gender: 'male',
    name: 'Alarico da Cunha',
    age: 57,
    avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
  },
  {
    gender: 'female',
    name: 'Queila Mendes',
    age: 51,
    avatar: 'https://randomuser.me/api/portraits/med/women/59.jpg',
  },
  {
    gender: 'female',
    name: 'Perpétua da Mota',
    age: 56,
    avatar: 'https://randomuser.me/api/portraits/med/women/28.jpg',
  },
  {
    gender: 'male',
    name: 'Amadeu Vieira',
    age: 67,
    avatar: 'https://randomuser.me/api/portraits/med/men/51.jpg',
  },
  {
    gender: 'female',
    name: 'Zelmira Araújo',
    age: 27,
    avatar: 'https://randomuser.me/api/portraits/med/women/25.jpg',
  },
  {
    gender: 'male',
    name: 'Adamantino Peixoto',
    age: 46,
    avatar: 'https://randomuser.me/api/portraits/med/men/87.jpg',
  },
  {
    gender: 'female',
    name: 'Leandra Caldeira',
    age: 26,
    avatar: 'https://randomuser.me/api/portraits/med/women/49.jpg',
  },
  {
    gender: 'female',
    name: 'Lana Araújo',
    age: 54,
    avatar: 'https://randomuser.me/api/portraits/med/women/71.jpg',
  },
];
let usersFiltered = [];
const inputSearch = document.getElementById('input-search');

// console.log(dataUsers);

// async function fetchUsers() {
//   const response = await fetch(
//     'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo',
//   );
//   const data = await response.json();

//   const dataUsers = data.results.map(user => {
//     const { gender, name, dob, picture } = user;

//     return {
//       gender,
//       name: `${name.first} ${name.last}`,
//       age: dob.age,
//       avatar: picture.medium,
//     };
//   });

//   console.log(dataUsers);

//   render();
// }

window.addEventListener('load', () => {
  filterUsers();
});

function render() {
  submitEvents();
  statisticResults();
}

function filterUsers() {
  inputSearch.addEventListener('keyup', () => {
    const inputValue = inputSearch.value;

    if (inputValue.length > 0) {
      usersFiltered = dataUsers.filter(user =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
      usersFiltered.sort((a, b) => a.name.localeCompare(b.name));
    }
  });

  render();
}

function submitEvents() {
  document.querySelector('button').addEventListener('click', searchResults);
  inputSearch.addEventListener('keyup', inputEnter);
}

function searchResults() {
  const total = usersFiltered.length;
  console.log(`Usuários filtrados: ${total}`);

  if (total === 0) {
    return;
  }
  changeTitle(total);
  userListResults();
  clearSearch();
}

function inputEnter(event) {
  if (event.key === 'Enter' || event.key === 'numpadEnter') {
    searchResults();
  }
}

function changeTitle(number) {
  const titleResults = document.getElementById('results-title');
  const titleStatistic = document.getElementById('statistic-title');
  const statistics = document.getElementById('statistic');

  titleResults.innerHTML = `${number} usuário(s) encontrados`;
  titleStatistic.innerHTML = '';
  statistics.style.display = 'block';
}

function clearSearch() {
  inputSearch.value = '';
}

function statisticResults() {
  // console.log('statisticResults');
}

/* DOM MANIPULATE */
function userListResults() {
  const usersId = document.getElementById('users');
  let usersHtml = '<div class="users">';

  usersFiltered.forEach(user => {
    const { avatar, name, age } = user;

    userHtml = `
      <img src="${avatar}">
      <div class="user-data">
        <p>${name}</p>
        <p>${age} anos</p>
      </div>
    `;
    usersHtml += userHtml;
  });

  usersHtml += '</div>';
  usersId.innerHTML = usersHtml;
}

// clearSearch => tem que limpar o input e quando nova digitação ou enter limpar os resultados
