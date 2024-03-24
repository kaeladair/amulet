import React, { useState, useEffect } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  Container,
  Typography,
  Box,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import Analytics from './components/Analytics';

const App: React.FC = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    const supabaseUrl = "https://wigitzumqayfmpjconhx.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZ2l0enVtcWF5Zm1wamNvbmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMTkwODksImV4cCI6MjAyNTU5NTA4OX0.pamddO2E9RJ5lk-zAQw0A0UhXSWE1rjVH0jH0Epf1HI";
    const supabase = createClient(supabaseUrl, supabaseKey);
    setSupabase(supabase);
  }, []);


  useEffect(() => {
    const fetchRecords = async () => {
      if (supabase) {
        const { data, error } = await supabase
          .from('records')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching records:', error);
        } else {
          setRecords(data || []);
        }
      }
    };

    fetchRecords();
  }, [supabase]);

  const formatTimestamp = (timestamp: string) => {
    const date = parseISO(timestamp);
    return format(date, 'MMM d, yyyy h:mm a');
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Audio Transcription Timeline
        </Typography>
        <div className="analytics-container">
          <Analytics />
        </div>
        <Grid container spacing={3}>
          {records.map((record) => (
            <Grid item xs={12} key={record.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {formatTimestamp(record.created_at)}
                  </Typography>
                  <Divider />
                  <Box mt={2}>
                    <Typography variant="body1" gutterBottom>
                      {record.raw_text}
                    </Typography>
                    <Box mt={1}>
                      <Chip
                        label={record.prominent_emotion}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                    <Box mt={2}>
                      <Typography variant="subtitle1" gutterBottom>
                        Summary:
                      </Typography>
                      <Typography variant="body2">
                        {record.summary}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default App;