import { useEffect, useState } from 'react';
import { Button, Skeleton } from '@mui/material';
import { Suspense, lazy } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid2';
import {
  Container,
  // Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Card,
  CardContent,
  // useTheme,
  // useMediaQuery
} from '@mui/material';
import { partnersOrdered } from './components/partnersSorting';
import { allMexicoStates } from './data/dataFilters/mexicoStates';
// import { Partners } from './typings/types';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
// type PartnerCardProps = {
//   partner: Partners;
// }

// Lazy load the PartnerCard component
const PartnerCard = lazy(() => import('./components/PartnerCard'));
// const PartnerCard = lazy(() =>
//   new Promise<{ default: React.ComponentType<PartnerCardProps> }>(resolve => {
//     setTimeout(() => {
//       resolve(import('./components/PartnerCard'));
//     }, 4000);
//   })
// );
// Create a loading skeleton component
const PartnerCardSkeleton = () => (
  <Card variant='outlined' sx={{ height: '100%', bgcolor: '#f8f8f8', borderRadius: 4 }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Skeleton variant="text" width="60%" height={24} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="40%" height={20} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="30%" height={20} sx={{ mb: 3 }} />
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Skeleton variant="rectangular" width={96} height={96} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" width={80} height={80} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const ContactPartner = () => {
  const [state, setState] = useState('Ciudad de México');
  const [certification, setCertification] = useState('all');
  const [certificationAS, setCertificationAS] = useState('all');
  const [filteredPartners, setFilteredPartners] = useState(partnersOrdered);

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Add new state for search query
  const [searchQuery, setSearchQuery] = useState('');
  // Simplify search handler
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // const filterPartners = () => {
  //   let filtered = partnersOrdered.filter((partner) => {
  //     if (state === 'all') {
  //       return !partner.isOffice;
  //     }
  //     return partner.state === state;
  //   });

  //   filtered = filtered.filter((partner) => {
  //     if (certification === 'all') {
  //       return partner;
  //     }
  //     return partner.certificationLevel === Number(certification) || partner.isOffice;
  //   });

  //   filtered = filtered.filter((partner) => {
  //     if (certificationAS === 'all') {
  //       return partner;
  //     }
  //     return partner.certificationAS === true;
  //   });

  //   setFilteredPartners(filtered);
  // };
  // Modify filterPartners to include search functionality
  const filterPartners = () => {
    let filtered = partnersOrdered.filter((partner) => {
      // When state is 'all', exclude offices
      if (state === 'all' && partner.isOffice) return false;
      // Apply all filters together
      if (state !== 'all' && partner.state !== state) return false;
      if (certification !== 'all' && partner.certificationLevel !== Number(certification)) return false;
      if (certificationAS !== 'all' && !partner.certificationAS) return false;
      if (searchQuery && !partner.inPageName.toLowerCase().includes(searchQuery.toLowerCase())) return false;

      return true;
    });

    setFilteredPartners(filtered);
  };

  const clearFilters = () => {
    setState('Ciudad de México');
    setCertification('all');
    setCertificationAS('all');
  };

  // useEffect(() => {
  //   filterPartners();
  // }, [state, certification, certificationAS]);
  // Update useEffect to include searchQuery
  useEffect(() => {
    filterPartners();
  }, [state, certification, certificationAS, searchQuery]);

  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h2" component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                textAlign: { xs: 'center', md: 'left' }
              }}>
              Contacta a un Partner
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Estado</InputLabel>
                  <Select
                    value={state}
                    label="Estado"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <MenuItem value="all">Todos</MenuItem>
                    {allMexicoStates.map((state) => (
                      <MenuItem key={state} value={state}>{state}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Nivel</InputLabel>
                  <Select
                    value={certification}
                    label="Nivel"
                    onChange={(e) => setCertification(e.target.value)}
                  >
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="2">Bronce</MenuItem>
                    <MenuItem value="3">Plata</MenuItem>
                    <MenuItem value="4">Oro</MenuItem>
                    <MenuItem value="5">Elite</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Certificación</InputLabel>
                  <Select
                    value={certificationAS}
                    label="Certificación"
                    onChange={(e) => setCertificationAS(e.target.value)}
                  >
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="as">Administrador de Sucursales</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 3 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={clearFilters}
                  startIcon={<FilterAltOffIcon />}
                  sx={{ height: '56px' }}  // Match height with Select components
                >
                  Limpiar Filtros
                </Button>
              </Grid>
            </Grid>

            {/* New search field */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Buscar por nombre del Partner..."
              value={searchQuery}
              onChange={handleSearchChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                  )
                }
              }}
              sx={{ mt: 2 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img"
              src="https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66dbb6ddb74ad2e23c4355aa_ContactaaunPartner.png"
              alt="Distribuidores Microsip"
              sx={{ width: '320px', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {filteredPartners.length === 0 ? (
              <Grid size={{ xs: 12 }}>
                <Typography variant="h6" color="text.secondary">
                  No se encontraron partners que coincidan con los criterios seleccionados.
                </Typography>
              </Grid>
            ) : (
              filteredPartners.map((partner, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Suspense fallback={<PartnerCardSkeleton />}>
                    <PartnerCard partner={partner} />
                  </Suspense>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};



export default ContactPartner;
