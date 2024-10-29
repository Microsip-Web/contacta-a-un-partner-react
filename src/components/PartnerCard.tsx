import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Partners } from '../typings/types';
import { AllORImages } from '../data/oficinasRegionales/ORImages';
import { partnersImages } from '../data/imagesPartners/partnersImages';
import Tooltip from '@mui/material/Tooltip';


const PartnerCard = ({ partner }: { partner: Partners }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        height: '100%',
        bgcolor: partner.isOffice ? 'white' : '#f8f8f8',
        borderRadius: 4
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {partner.isOffice && (
              <Box sx={{ width: '112px', mb: 1 }}>
                <Box component="img" src={AllORImages.logoMS} sx={{ width: '100%' }} />
                <Typography variant="caption" color="text.secondary">
                  {partner.office.toUpperCase()}
                </Typography>
              </Box>
            )}

            {!partner.isOffice && (
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary',
                  mb: 2
                }}
              >
                {partner.inPageName.toUpperCase()}
              </Typography>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                {partner.city}
              </Typography>
            </Box>

            <Box
              component="a"
              href={`tel:${partner.phone}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Tooltip title="Llamar"
                slotProps={{
                  tooltip: {
                    sx: {
                      bgcolor: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.secondary.contrastText,
                      borderRadius: '12px',
                      fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' }
                    }
                  },
                  arrow: {
                    sx: {
                      color: (theme) => theme.palette.primary.main,
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">
                    {partner.phone}
                  </Typography>
                </Box>
              </Tooltip>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {partner.email && (
                <Tooltip title="Enviar correo electrónico"
                  slotProps={{
                    tooltip: {
                      sx: {
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.secondary.contrastText,
                        borderRadius: '12px',
                        fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' }
                      }
                    },
                    arrow: {
                      sx: {
                        color: (theme) => theme.palette.primary.main,
                      }
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      component="a"
                      href={`mailto:${partner.email}`}
                      sx={{
                        p: 1,
                        bgcolor: partner.isOffice ? 'text.primary' : 'white',
                        '&:hover': {
                          bgcolor: partner.isOffice ? 'text.primary' : 'white',
                          '& svg': { color: 'primary.main' }
                        }
                      }}
                    >
                      <EmailIcon
                        sx={{
                          fontSize: 20,
                          color: partner.isOffice ? 'white' : 'text.primary',
                          transition: 'color 0.3s ease-in-out'
                        }}
                      />
                    </IconButton>
                  </Box>
                </Tooltip>
              )}
            </Box>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto',
            justifyItems: 'end',
            height: '100%'
          }}>
            {!partner.isOffice && (
              <Box sx={{ width: '96px', m: 1 }}>
                <Box
                  component="img"
                  src={
                    partner.certificationName === 'Bronce'
                      ? partnersImages.Bronce
                      : partner.certificationName === 'Plata'
                        ? partnersImages.Plata
                        : partner.certificationName === 'Oro'
                          ? partnersImages.Oro
                          : partnersImages.Elite
                  }
                  sx={{ width: '100%' }}
                />
              </Box>
            )}

            {partner.certificationAS && (
              <Box sx={{ width: '80px', m: 1 }}>
                <Box
                  component="img"
                  src={partnersImages.AS}
                  sx={{ width: '100%' }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
