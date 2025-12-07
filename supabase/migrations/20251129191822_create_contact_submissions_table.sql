/*
  # Create Contact Form Submissions Table
  
  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Visitor name
      - `email` (text) - Visitor email
      - `project_type` (text) - Type of inquiry
      - `message` (text) - Message content
      - `created_at` (timestamp) - Submission timestamp
      - `status` (text) - Processing status (new, read, responded)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Public users can insert submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
